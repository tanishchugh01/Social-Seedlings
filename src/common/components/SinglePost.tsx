import { Photo } from "@/common/types/Photo";

const SinglePost: React.FC<{ photoData: Photo }> = ({ photoData }) => {
  return (
    <div>
      <ul>
        <li key={photoData.id}>
          <img src={photoData.urls.thumb} alt={photoData.alt_description} />
        </li>
      </ul>
    </div>
  );
};

export default SinglePost;
