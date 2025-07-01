import React from "react";
import { FaArrowRight, FaFaceSmile } from "react-icons/fa6"

import { SlSettings } from "react-icons/sl"
import { Link } from "react-router"
import MyMassage from "../components/MyMassage"
import FriendMassage from "../components/FriendMassage"
import { FaSmile, FaSmileBeam } from "react-icons/fa"

const ChatPage = () => {
  return (
    <>
      <section className="px-2 border-4 rounded-t-2xl md:rounded-l-2xl bg-[#202020] border-[#4f4e4e]">
        <div className="flex flex-col p-2 pb-0">
          <div className="w-full flex gap-3 items-center border-b-2 pb-2 border-[#4f4e4e]">
            <img
              src="/profile-image.jpg"
              alt="my-image"
              className="w-15 rounded-full"
            />
            <div>
              <h2 className="text-2xl text-white underline">user-name</h2>
            </div>
            <Link to="/myProfile" className="">
              <SlSettings className="flex p-3 text-[45px] text-white hover:text-[#80c3dd]" />
            </Link>
          </div>
          <div className="overflow-y-auto py-5 text-white h-[calc(100dvh-170px)] flex flex-col gap-2.5  ">
            <FriendMassage message={" Lorem ipsum dolor"} />
            <MyMassage message={" Lorem ipsum dolor"} />
            <FriendMassage message={" Lorem ipsum dolor"} />
            <MyMassage
              message={
                " Lorem ipsum dolor sdfs esdfgh jjkls d ahhfiu huu ylkagiu kjzfj oei tg ahhfiu huu ylkagiu kjzfj oei tg ahhfiu huu ylkagiu kjzfj oei tg ahhfiu huu ylkagiu kjzfj oei tg"
              }
            />
            <FriendMassage
              message={" Lorem ipsum dolorafas aff ew  fdf afgsdf wrrew "}
            />
            <FriendMassage
              message={" Lorem ipsum dolorafas aff ew  fdf afgsdf wrrew "}
            />
            <MyMassage message={" Lorem ipsum dolo fkldfj woi  flkdsjfr"} />
            <FriendMassage message={" Lorem ipsum dolor"} />
            <MyMassage message={" Lorem ipsum dolor"} />
            <FriendMassage message={" Lorem ipsum dolor"} />
            <MyMassage
              message={
                " Lorem ipsum dolor jfsdifj fjoio ni lkfsdlk 3f jjv  kldos s fe"
              }
            />
            <MyMassage message={" Lorem ipsum dolor"} />
            <MyMassage message={" Lorem ipsum dolor sdfs esdfgh jjkls d"} />
            <FriendMassage message={" Lorem ipsum dolor"} />
            <MyMassage
              message={
                " Lorem ipsum dolor sdfs esdfgh jjkls ddfsf fsdf er fg 65 iore cnvx,n riu "
              }
            />
            <FriendMassage message={" Lorem ipsum dolor"} />
            <FriendMassage message={" Lorem ipsum dolor sdfs esdfgh jjkls d"} />
            <MyMassage message={" Lorem ipsum dolor ddas ertre gg  lorem"} />
            <FriendMassage
              message={
                " Lorem ipsum dolor jfsdifj fjoio ni lkfsdlk 3f jjv  kldos s fe"
              }
            />
            <FriendMassage message={" Lorem ipsum dolor"} />
            <FriendMassage
              message={
                " Lorem ipsum dolor fkjh fewiu jksdf ruewo ukjflk ureoiw uf sklj lk  reu ou akl kr sh sdsf kshf wh i"
              }
            />
            <MyMassage
              message={
                " Lorem ipsum dolor lkjsdlkf wro uc,v lksrw9u lk jk lur w "
              }
            />
            <FriendMassage message={" Lorem ipsum dolor"} />
            <MyMassage
              message={
                " Lorem ipsum dolor jfsdifj fjoio ni lkfsdlk 3f jjv  kldos s fedsfd df sf oiioiwj jjsdfj io  fidfurioj . lskfo uif lf joi "
              }
            />
            <FriendMassage
              message={
                " Lorem ipsum dolor fsdf f w a fsf w sa faf safaf 4 afjioajfs aijfojfa  sf a w"
              }
            />
            <MyMassage message={" Lorem ipsum dolor lkfl;k a lkas ja. as"} />
            <FriendMassage
              message={
                " Lorem ipsum dolor lkjdf ialri fawisdl;fjsdl; sdfsfw lsjflsdj lsjfowa xjfs "
              }
            />
            <FriendMassage message={" Lorem ipsum dolor dj sd jfsd wkf f"} />
            <MyMassage
              message={
                " Lorem ipsum dolorasa lksd uireal fjcv nx yu j s kf hsfhe uifhf ahhfiu huu ylkagiu kjzfj oei tg ahhfiu huu ylkagiu kjzfj oei tg"
              }
            />
            <FriendMassage
              message={
                " Lorem ipsum dolor lkjdf ialri fawisdl;fjsdl; sdfsfw lsjflsdj lsjfowa xjfs "
              }
            />
            <MyMassage message={" Lorem ipsum dolor dsadas"} />
          </div>
          <div className="border-t-3 border-[#565656]">
            <div className="flex gap-2 pt-3 items-center">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="type your message"
                  className="text-[17px] text-white custom-inset-shadow py-4 placeholder:text-2xl placeholder-stone-400 pl-3  bg-[#3f3e3e] rounded-full border-4 border-[#202020] outline-none focus:outline-none focus:ring-2 focus:ring-[#b6b5b5] w-full"
                />
              </div>
              <div className="flex items-center w-fit justify-center cursor-pointer rounded-full group ">
                <FaFaceSmile className="text-[30px] md:text-[40px] p-1 text-white group-hover:text-[#80c3dd] active:text-white border-2  rounded-full" />
              </div>
              <div className="flex items-center w-fit justify-center cursor-pointer rounded-full group ">
                <FaArrowRight className="text-[30px] md:text-[40px] p-1 text-white group-hover:text-[#80c3dd] active:text-white border-2  rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatPage;
