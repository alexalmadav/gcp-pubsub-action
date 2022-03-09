const core = require("@actions/core");
const { PubSub } = require("@google-cloud/pubsub");

try {
  const messageBody = core.getInput("message-body");
  const projectId = core.getInput("project-id");
  const topic = core.getInput('pubsub-topic');

  queueMessage(projectId, topic, messageBody);
} catch (error) {
  core.setFailed(error.message);
}

async function queueMessage(projectId, topicName, body) {
  const pubsub = new PubSub({ projectId });
  const topic = pubsub.topic(topicName);

  topic.publishMessage({ json: JSON.parse(body) });
}
