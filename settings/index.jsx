const Settings = (props) => {
  return (
    <Page>
      <Section title={<Text bold align="center">Redirect Demo</Text>}>
        <Webconfig
          label={props.settingsStorage.getItem("name") || "Name"}
          status="Update"
          constructUrl={(returnUrl, callbackUrl) => {
            return `https://dillpixel.com/clients/fitbit/webconfig-demo?state=${encodeURIComponent(callbackUrl)}`
          }}
          onReturn={(query) => {
            let parameters = {}
            const parts = query.split("&")
            for (let part of parts) {
              const pair = part.split("=")
              parameters[pair[0]] = pair[1]
            }
            props.settingsStorage.setItem("name", decodeURIComponent(parameters["name"]))
          }}
        />
      </Section>
    </Page>
  )
}

registerSettingsPage(Settings)
