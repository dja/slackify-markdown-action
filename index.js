const core = require('@actions/core');
const slackifyMarkdown = require('slackify-markdown');
const nodePandoc = require('node-pandoc');

try {
    const md = core.getInput('text', { required: true });
    const mrkdwn = slackifyMarkdown(md);

    // If input has parameter for strip-comments, use pandoc to strip comments from markdown and return markdown
    if (core.getInput('strip-comments') === 'true') {
        const pandoc = await nodePandoc(mrkdwn, '-f markdown -t markdown --atx-headers --wrap=none --strip-comments');
        core.setOutput("text", pandoc);
    } else {
        core.setOutput("text", mrkdwn);
    }
} catch (error) {
    core.setFailed(error.message);
}
