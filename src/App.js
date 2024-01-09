import { Tweet } from "./tweets";
import "./tweets/styles.css";

function App() {
  const tweetsContents = [
    {
      imageUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
      name: "Mark Wolf",
      handle: "markwolf005",
      date: "Dec 26",
      message: `I got my wife a fridge for Christmas. I can't wait to see her face
      light up when she opens it.`,
      replyCount: 1094,
      likeCount: 2057,
    },
    {
      imageUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "Alice keys",
      handle: "akeys05",
      date: "Jan 4",
      message: `The`,
      replyCount: 1094,
      likeCount: 878768768768768787,
    },
  ];
  return (
    <div className="tweet-list">
      {tweetsContents.map((tweet) => {
        const { imageUrl, name, handle, date, message, likeCount, replyCount } =
          tweet;
        return (
          <Tweet
            imageUrl={imageUrl}
            name={name}
            handle={handle}
            date={date}
            message={message}
            likeCount={likeCount}
            replyCount={replyCount}
          />
        );
      })}
    </div>
  );
}

export default App;
