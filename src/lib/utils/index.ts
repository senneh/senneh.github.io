import path from 'path';


export type PostMetadata = {
  title?: string,
  date?: string,
}

export async function fetchMarkdownPosts() {
  const allPostFiles = import.meta.glob('/src/routes/blog/**/*.svx');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([filepath, resolver]) => {
      const { metadata } = await resolver() as { metadata: PostMetadata };
      path.basename(filepath);


      return {
        meta: metadata,
        slug: path.join("blog", filepath.split(path.sep).at(-2) ?? "error"),
      };
    })
  );

  return allPosts;
};