using FireGuardians;
using FireGuardians.Repository.FireReports;
using FireGuardians.Repository.Wallets;
using FireGuardians.Services;
using Lib.Net.Http.WebPush;
using Meshmakers.Octo.Sdk.ServiceClient.AssetRepositoryServices.Tenants;
using Meshmakers.Octo.Sdk.ServiceClient.Authentication;
using Meshmakers.Octo.Sdk.ServiceClient.IdentityServices;
using Microsoft.Extensions.Options;
using NLog;
using NLog.Web;
using LogLevel = Microsoft.Extensions.Logging.LogLevel;

// NLog: setup the logger first to catch all errors
var nLogFactory = LogManager.Setup().RegisterNLogWeb().LoadConfigurationFromFile("nlog.config").LogFactory;
var logger = nLogFactory.GetCurrentClassLogger();

try
{
    logger.Debug("init main");
    
    var builder = WebApplication.CreateBuilder(args);

    builder.Services.Configure<FireGuardiansOptions>(options =>
        builder.Configuration.GetSection("FireGuardians").Bind(options));
    
    // additional providers here needed.
    // allow environment variables to override values from other providers.
    builder.Configuration.AddEnvironmentVariables("FIRE_").AddCommandLine(args).AddUserSecrets(typeof(Program).Assembly, true);

    
    // NLog: Setup NLog for Dependency injection
    builder.Logging.ClearProviders();
    builder.Logging.SetMinimumLevel(LogLevel.Trace);
    builder.Host.UseNLog();

    // Add services to the container.
    builder.Services.AddControllersWithViews();
    
    builder.Services.AddOptions<IdentityServiceClientOptions>()
        .Configure<IOptions<FireGuardiansOptions>>(
            (options, fireGuardiansOptions) => { options.EndpointUri = fireGuardiansOptions.Value.AuthorityUrl; });

    builder.Services.AddOptions<AuthenticatorOptions>()
        .Configure<IOptions<FireGuardiansOptions>>(
            (options, fireGuardiansOptions) =>
            {
                options.IssuerUri = fireGuardiansOptions.Value.AuthorityUrl;
                options.ClientId = fireGuardiansOptions.Value.ClientId;
                options.ClientSecret = fireGuardiansOptions.Value.ClientSecret;
            });
    
    builder.Services.AddOptions<TenantClientOptions>()
        .Configure<IOptions<FireGuardiansOptions>>(
            (options, backendOptions) =>
            {
                options.TenantId = backendOptions.Value.TenantId;
                options.EndpointUri = backendOptions.Value.AssetServiceUrl;
            });

    builder.Services.AddTransient<IAuthenticationService, AuthenticationService>();
    builder.Services.AddTransient<IAuthenticatorClient, AuthenticatorClient>();

    builder.Services.AddTransient<IIdentityServiceClientAccessToken, ServiceClientAccessToken>();
    builder.Services.AddTransient<IIdentityServicesClient, IdentityServicesClient>();

    builder.Services.AddTransient<ITenantClient, TenantClient>();
    builder.Services.AddTransient<ITenantClientAccessToken, ServiceClientAccessToken>();

    builder.Services.AddTransient<IFireReportsRepository, FireReportsRepository>();
    builder.Services.AddTransient<IWalletRepository, WalletRepository>();

    builder.Services.AddHttpClient<PushServiceClient>();
    builder.Services.AddHostedService<FireNotificationsProducer>();

    var app = builder.Build();

    // Configure the HTTP request pipeline.
    if (!app.Environment.IsDevelopment())
    {
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
    }

    app.UseHttpsRedirection();
    app.UseStaticFiles();
    app.UseRouting();


    app.MapControllerRoute(
        name: "default",
        pattern: "{controller}/{action=Index}/{id?}");

    app.MapFallbackToFile("index.html");

    app.Run();
}
catch (Exception ex)
{
    //NLog: catch setup errors
    logger.Error(ex, "Stopped program because of exception");
    throw;
}
finally
{
    // Ensure to flush and stop internal timers/threads before application-exit (Avoid segmentation fault on Linux)
    LogManager.Shutdown();
}

