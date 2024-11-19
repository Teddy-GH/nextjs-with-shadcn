'use client'
import { useParams } from 'next/navigation';
import BackButton from '@/components/BackButton';
import PostForm from '@/components/posts/PostForm';



const PostEditPage = () => {
  const { id  } = useParams();

  return (
    <>
      <BackButton text="Back To Posts" link="/posts" />
      <PostForm  params={{id}}/>
    </>
  );
};

export default PostEditPage;
