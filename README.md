# Google Cloud PubSub action

This action queues a message into a given google cloud pubsub topic

  project-id: 
    description: 'GCP Project ID'
    required: true
  pubsub-topic:
    description: 'PubSub Topic name'
    required: true
  message-body: 
    description: 'PubSub message body'
    required: true

## Inputs

## `project-id`

**Required** The Google Cloud project ID.

## `pubsub-topic`

**Required** The PubSub topic to publish the message to. i.e. `projects/{gcp-project}/topics/{topic-name}`

## `message-body`

**Required** JSON string body of the message to be published. i.e. `{"foo":"bar"}`

## Outputs

## `none`

## Example usage
`need to set up gcloud with google-github-actions first`

```
 steps:
    - uses: actions/checkout@v2
    - id: 'auth'
      uses: 'google-github-actions/auth@v0'
      with:
        credentials_json: {gcp-credentials-json}
        project_id: gpc-project-id
    - name: setup gcloud
      uses: 'google-github-actions/setup-gcloud@v0'
    - uses: alexalmadav/gcp-pubsub-action@v1.0.2
      name: queue pubsub message
      with:
        project-id: gcp-project-id
        pubsub-topic: gcp-pubsub-topic-name
        message-body: '{ "foo": "bar" }'
```