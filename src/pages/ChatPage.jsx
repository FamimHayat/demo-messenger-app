import React from "react";
import { FaPlus } from "react-icons/fa6"
import { FiSearch } from "react-icons/fi";
import Users from "../components/Users"
import { SlSettings } from "react-icons/sl"
import { Link } from "react-router"

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
          <div className="overflow-y-auto text-white h-[calc(100dvh-170px)] flex flex-col gap-1  ">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, inventore, ipsum ab debitis sed dolores, facilis itaque est ullam magnam aspernatur excepturi maiores minus minima laborum architecto? Debitis ipsam necessitatibus quod expedita soluta dolore atque impedit consequuntur numquam assumenda voluptatum minus temporibus ea quaerat cumque reiciendis cum facilis, officiis blanditiis deserunt? Nulla, tenetur animi molestias aspernatur rem voluptas laborum repudiandae itaque odio illo suscipit enim minima quisquam vitae dolorem at iure beatae perspiciatis, debitis dolorum exercitationem obcaecati ut. Qui omnis odio excepturi officiis neque dolorum quaerat nemo exercitationem eos deserunt. Officia possimus optio et fugit obcaecati soluta, deleniti modi neque blanditiis cupiditate qui dolores, laborum perspiciatis corporis velit illo aliquam natus excepturi, vitae sapiente. Amet porro modi ad sequi recusandae officiis tempora, doloribus deserunt neque, incidunt accusamus dolorum ea pariatur. Incidunt totam beatae voluptatem quasi dicta adipisci ipsam laudantium cupiditate necessitatibus placeat sit, mollitia praesentium id rerum consectetur dolores quia maxime neque? Alias voluptates molestiae ex voluptas repellendus soluta officia magni laborum quis vel dolorum eligendi harum ullam, eveniet, cum itaque tempora eius! Praesentium vel adipisci doloribus, porro saepe provident similique possimus totam, consequatur, deleniti nemo? Nobis non fugiat, veniam et mollitia soluta ducimus iste expedita debitis quod illum similique repellendus quo aperiam rerum. Modi eaque aliquid repellat. Dicta ipsam tenetur ullam obcaecati amet dolorem quidem temporibus odit nesciunt iusto, aut ut eius consectetur nulla ab reprehenderit pariatur molestiae quibusdam recusandae porro voluptas! Labore similique doloribus quibusdam cum. Libero officia itaque, neque a quasi natus similique amet odit officiis ex illum? Est quia nihil dolore quae quod iusto doloremque earum nesciunt, excepturi voluptas ipsam architecto veritatis beatae, esse alias. Odit facilis quasi blanditiis molestiae. Illo, optio? Maxime reiciendis accusamus consectetur officia harum minima recusandae eos repellat sunt doloremque ducimus dolores hic mollitia culpa iusto, voluptatem asperiores minus, aut sequi. Totam consectetur cupiditate ut dolores atque labore debitis perferendis nostrum odit neque nulla itaque ex ab, vel delectus est inventore quaerat officia ipsam dolorem quae dignissimos? Quis eos deserunt velit, facere suscipit omnis asperiores aspernatur harum odit doloremque delectus dolorum quam error voluptates maxime voluptatem excepturi enim molestiae sint cumque non sapiente! Animi corrupti recusandae culpa, voluptas aut itaque accusantium. Voluptatibus ex, dolore excepturi culpa numquam animi ut aspernatur, voluptate laboriosam nam sit molestias cumque rem laudantium? Voluptate debitis voluptatibus ea perferendis sit doloremque cupiditate quasi deleniti saepe quidem quae nisi beatae porro, atque illo natus voluptates, inventore itaque ex modi consequatur accusamus facilis. Natus eum sint ad in cumque officiis repudiandae libero earum distinctio hic, sequi consequuntur beatae asperiores quo fugit rerum, nam eaque! Numquam atque ad aut mollitia excepturi consectetur, reiciendis dolor adipisci sunt culpa aliquid voluptate error fugit incidunt nemo quis sapiente, ducimus commodi recusandae veniam? Beatae esse dolore ullam necessitatibus amet culpa ipsum ab aperiam, blanditiis commodi qui, delectus incidunt placeat labore totam. Accusamus a similique officia error cum inventore est. Reprehenderit laudantium, illum ex vitae dolorum culpa expedita delectus blanditiis aliquid laboriosam ullam ut eveniet recusandae aperiam magnam? A ullam dolore, architecto accusamus dolorem voluptas sit corporis eaque neque adipisci incidunt. Harum voluptate quam quaerat, eveniet sit labore. Quia ut, non sint amet saepe dolor! Provident quasi recusandae et repudiandae maiores expedita doloremque, esse, ipsam culpa explicabo suscipit exercitationem labore cupiditate molestiae ut excepturi neque qui facilis veritatis officia? Molestias magni, deserunt optio ex, rem maiores fugit esse, ratione atque in culpa totam nihil inventore veritatis vero aliquid voluptatum? Illo illum voluptate suscipit quas possimus facere provident at placeat assumenda, vero fuga ab ullam eum magni, nisi architecto! Fuga molestiae autem alias eum ipsam ullam delectus dolorum iure, vero placeat quia, velit illo maxime aspernatur cum!
          </div>
          <div>
            <div className=" flex gap-2 pt-3 items-center ">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="search username"
                  className="text-[25px] text-white placeholder-gray-400 pl-2 py-2 pr-10 bg-[#3f3e3e] rounded-full border-4 border-[#202020] outline-none focus:outline-none focus:ring-2 focus:ring-[#b6b5b5] w-full"
                />
                <FiSearch
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2   text-white cursor-pointer rounded-full hover:bg-[#181818] active:bg-[#767676]"
                  size={40}
                />
              </div>
              <div className="flex items-center w-fit justify-center  cursor-pointer  rounded-full group active:bg-[#767676]">
                <h2 className="text-[25px] hidden sm:flex md:hidden lg:flex text-white px-3 group-hover:text-[#80c3dd]">
                  add
                </h2>
                <FaPlus className="text-[30px] pr-3 text-white  group-hover:text-[#80c3dd]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatPage;
