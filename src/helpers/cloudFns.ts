export const buildCloudFnRoute = ({ projectId, functionName }: { projectId: string; functionName: string }) => {
  return `https://us-central1-${projectId}.cloudfunctions.net/${functionName}`
}
