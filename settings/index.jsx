const Settings = (props) => {
  return (
    <Page>
      <Section title={<Text bold align="center">Redirect Demo</Text>}>
        <Webconfig
          label={props.settingsStorage.getItem("name") || "Name"}
          status="Update"
          constructUrl={(returnUrl, callbackUrl) => {
            let state = {
              "callbackUrl": encodeURIComponent(callbackUrl),
              "nonce": Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            }
            return `https://dillpixel.com/clients/fitbit/redirect-demo?state=${encodeURIComponent(JSON.stringify(state))}`
          }}
          onReturn={(query) => {
            let parameters = {}
            const parts = query.split("&")
            for (let part of parts) {
              const pair = part.split("=")
              parameters[pair[0]] = pair[1]
            }
            props.settingsStorage.setItem("name", parameters["name"])
          }}
        />
      </Section>
    </Page>
  )
}

registerSettingsPage(Settings)
