# Ensure that you have logged in to identity services (om_login_local.ps1)

# Create resources and scopes for API
octo-cli -c createapiresource -n fdaDataAPI -dn "FDA Data API" -d "Access to FDA data API using Data Service" -s "fdaDataAPI.full_access,fdaDataAPI.read_only"
octo-cli -c createapiscope -n "fdaDataAPI.full_access" -e true -d "Full access to FDA data API using Data Service" -dn "Full Access FDA Data API"
octo-cli -c createapiscope -n "fdaDataAPI.read_only" -e true -d "Readonly access to FDA data API using Data Service" -dn "Readonly Access FDA Data API"

# Allow access of FDA Client
octo-cli -c AddAuthorizationCodeClient --clienturi https://localhost:6006/ --clientid fda-webclient --redirectUri "https://localhost:6006/" --name "FDA WebClient"
octo-cli -c AddAuthorizationCodeClient --clienturi https://localhost:44418/ --clientid fda-webclient-debug --redirectUri "https://localhost:44418/" --name "FDA Webclient debug"
octo-cli -c AddScopeToClient --clientid fda-webclient --name "fdaDataAPI.full_access"
octo-cli -c AddScopeToClient --clientid fda-webclient-debug --name "fdaDataAPI.full_access"

# Add FDA management client
octo-cli -c AddDeviceCodeClient -id fda-mgmt-cli -n "FDA Management CLI" -s 'utd.pwx8rdv9UAP7maf'
octo-cli -c AddScopeToClient --clientid fda-mgmt-cli --name "fdaDataAPI.full_access"
octo-cli -c AddScopeToClient --clientid fda-mgmt-cli --name "identityAPI.full_access"
