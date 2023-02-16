# slackify-markdown-action
GitHub Action to convert markdown into Slack's mrkdwn. Basically just a wrapper of [jsarafajr/slackify-markdown](https://github.com/jsarafajr/slackify-markdown).

## Usage

### Inputs

* `text` - The markdown text to convert.
* `strip-comments` - (Optional) Removes HTML comments from Markdown. Defaults to false.

### Outputs

* `text` - The markdown text converted to Slack's mrkdwn format.
