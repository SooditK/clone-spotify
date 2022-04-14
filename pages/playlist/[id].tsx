import prisma from "../../lib/prisma";
import { GetServerSideProps } from "next";
import GradientLayout from "../../components/gradientLayout";

const getBGColor = (id: number) => {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "gray",
    "teal",
    "yellow",
  ];
  return colors[Math.floor(Math.random() * colors.length)] || colors[id - 1];
  // return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ playlist }) => {
  // console.log(playlist);
  const color = getBGColor(playlist.id);
  console.log(color);
  return (
    <GradientLayout
      roundImage={false}
      title={playlist.name}
      subtitle="playlist"
      description={`${playlist.songs.length} Songs`}
      color={color}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      {playlist.name}
    </GradientLayout>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const userId = context.req.headers.cookie.split("=")[1];
  // try {
  const playlist = await prisma.playlist.findFirst({
    where: {
      id: Number(id),
      // userId: Number(userId),
    },
    include: {
      songs: true,
      user: true,
    },
  });
  return { props: { playlist } };
  // } catch (e) {
  //   return {
  //     props: {
  //       playlist: {
  //         id: 0,
  //         name: "",
  //         userId: 0,
  //         songs: [],
  //         user: {
  //           id: 0,
  //           name: "",
  //           email: "",
  //         },
  //       },
  //     },
  //   };
  // }
};

export default Playlist;
