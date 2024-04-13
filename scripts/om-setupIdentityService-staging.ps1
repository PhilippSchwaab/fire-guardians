# Ensure that you have logged in to identity services (om-login-local.ps1, om-login-k8-staging.ps1)

# Allow access of fire guardians app to identity service
octo-cli -c AddAuthorizationCodeClient --clienturi https://app.staging.fire-guardians.com/ --clientid fire-guardians-app --redirectUri "https://app.staging.fire-guardians.com/" --name "Fire Guardians App"
octo-cli -c AddScopeToClient --clientid fire-guardians-app --name "systemAPI.full_access"


