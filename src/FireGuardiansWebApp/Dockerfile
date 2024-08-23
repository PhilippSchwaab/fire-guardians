FROM meshmakers/dotnet_aspnetcore-runtime-node:8.0-20240813.1 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM meshmakers/dotnet_sdk-node:8.0-20240813.1 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["src/Directory.Build.props", "src/Directory.Build.props"]
COPY ["src/FireGuardiansWebApp/FireGuardiansWebApp.csproj", "src/FireGuardiansWebApp/"]
COPY ["src/FireGuardiansCkModel/FireGuardiansCkModel.csproj", "src/FireGuardiansCkModel/"]
RUN dotnet restore "src/FireGuardiansWebApp/FireGuardiansWebApp.csproj"
COPY . .
WORKDIR "/src/src/FireGuardiansWebApp"
RUN dotnet build "FireGuardiansWebApp.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "FireGuardiansWebApp.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FireGuardiansWebApp.dll"]
