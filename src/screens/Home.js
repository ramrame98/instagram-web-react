import Feed from "components/Feed";
import { getAllFeeds } from "../api";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const { data } = useQuery(["feeds"], getAllFeeds);
  console.log("data", data);

  return (
    <div>
      {data?.map((feed) => (
        <Feed key={feed.id} {...feed} />
      ))}
    </div>
  );
}

export default Home;

// const data = [
//   {
//     id: 1,
//     file: "https://mblogthumb-phinf.pstatic.net/20160421_74/ulmia2040_1461218132845QRap9_JPEG/20160421_134429.jpg?type=w800",
//     caption: "내용입니다",
//     user: {
//       username: "development",
//       profileImg:
//         "https://static.vecteezy.com/system/resources/previews/004/244/268/original/cute-dog-cartoon-character-illustration-free-vector.jpg",
//     },
//     likesNum: 0,
//     reviewsNum: 33,
//     isLiked: false,
//     comments: [
//       {
//         id: 1,
//         payload: "첫 번째 댓글",
//         user: {
//           username: "nickname2",
//           profileImg:
//             "http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg",
//         },
//       },
//       {
//         id: 2,
//         payload: "두 번째 댓글",
//         user: {
//           username: "grey_cat",
//           profileImg:
//             "http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg",
//         },
//       },
//     ],
//   },
//   {
//     id: 2,
//     file: "https://mblogthumb-phinf.pstatic.net/20160421_74/ulmia2040_1461218132845QRap9_JPEG/20160421_134429.jpg?type=w800",
//     caption: "내용입니다",
//     user: {
//       username: "development2",
//       profileImg:
//         "https://static.vecteezy.com/system/resources/previews/004/244/268/original/cute-dog-cartoon-character-illustration-free-vector.jpg",
//     },
//     likes: 123,
//     commentNumber: 33,
//     isLiked: true,
//   },
//   {
//     id: 3,
//     file: "https://mblogthumb-phinf.pstatic.net/20160421_74/ulmia2040_1461218132845QRap9_JPEG/20160421_134429.jpg?type=w800",
//     caption: "내용입니다",
//     user: {
//       username: "development",
//       profileImg:
//         "https://static.vecteezy.com/system/resources/previews/004/244/268/original/cute-dog-cartoon-character-illustration-free-vector.jpg",
//     },
//     likes: 93,
//     commentNumber: 33,
//     isLiked: true,
//   },
// ];
