export function isPublishedPost(
  post: { published?: boolean } | null | undefined
) {
  return post?.published !== false;
}
