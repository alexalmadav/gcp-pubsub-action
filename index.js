const core = require("@actions/core");
const github = require("@actions/github");
const { PubSub } = require("@google-cloud/pubsub");

try {
  const saKey = core.getInput("sa-key");
  const projectId = core.getInput("project-id");
  const messageBody = core.getInput("message-body");
  const topic = core.getInput('pubsub-topic');
  queueMessage(saKey, projectId, subscription, messageBody, topic);
} catch (error) {
  core.setFailed(error.message);
}

async function queueMessage(saKey, projectId, subscriptionName, body, topicName) {
  const pubsub = new PubSub({ projectId });
  const topic = pubsub.topic(topicName);
  topic.publish(Buffer.from(JSON.stringify(body)));
  const [subscription] = await topic.subscription(subscriptionName);
}
