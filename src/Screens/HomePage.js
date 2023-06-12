import React from "react";

const HomePage = () => {
  return (
    <div className="grid grid-cols-2 my-3 mx-12 container">
      <img
        src="https://www.icegif.com/wp-content/uploads/spaceship-icegif-1.gif"
        alt="Landing"
        className="h-[35rem] w-[40rem] bg-primary"
      />
      <span className="flex flex-col -ml-24 gap-2">
        <header className="font-montserrat font-semibold text-lg">
          What is Astronomer's Portal?
        </header>
        <span className="w-9/12 font-montserrat font-medium text-base leading-8">
          An astronomer is a special scientist who studies the fascinating
          things that exist in space. They explore planets, stars, galaxies, and
          all the amazing wonders of the universe. Astronomers use telescopes
          and other tools to observe and learn about the things that are far
          away in space. Astronomers are like space detectives. They ask
          questions like, "How big is that star?" or "What is the shape of that
          galaxy?" They collect clues by looking at pictures and data that they
          gather from their telescopes. They try to understand how everything in
          space works. Astronomers also discover new things in space. They may
          find a new planet or a new star. Sometimes, they even find something
          that nobody has seen before! They share their discoveries with other
          scientists and teach us all about the wonders of the universe.
          Astronomers work in different places. Some work in observatories,
          which are special buildings with big telescopes. Others work in
          laboratories or universities where they study and analyze the
          information they collect. They spend a lot of time looking at the sky
          and thinking about the mysteries of space. Astronomers are curious and
          brave explorers of the universe. They help us understand the amazing
          things that are out there beyond our planet. So, next time you look up
          at the stars, remember that there are astronomers studying them and
          uncovering the secrets of the cosmos. Who knows, maybe one day you
          will become an astronomer too!
        </span>
      </span>
    </div>
  );
};

export default HomePage;
