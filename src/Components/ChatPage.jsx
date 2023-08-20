import { useState, useContext } from "react";
import { userContext } from "../Context/UserProvider"; 
import { BsChatRight, BsChevronDown } from "react-icons/bs"; 
import { Box, Flex, Icon, Text, Image } from "@chakra-ui/react"; 

const ChatPage = () => {
  const { users } = useContext(userContext); 
  const [open, setOpen] = useState(false); 

  const handleOpenChats = () => {
    setOpen(!open); // Toggling the value of "open" when the chat box is clicked
  };

  return (
    <div className="absolute bottom-0 z-10 flex justify-end right-14 "  > 
      <Box
        className="bg-white w-72"
        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" 
        
        rounded="10px" 
      >
         {open ? ( 
          <Box className="p-4 w-72    z-10 h-[16rem] overflow-y-auto scrollbar-thin">
            {users?.map((user) => ( 
              <Box
               className=""
               key={user.id}>
                <Flex gap="4" pb="[5px]">
                  <div className="flex w-10/12">
                  <Image
                    className="w-8 h-8 mb-2 rounded-full "
                    src={user.profilepicture}
                    alt={user.username}
                  />
                  <Text
                  className="ml-2 ">{user.name}</Text>
                  </div>
                  <div className="w-3 h-3 mt-2 mb-2 ml-10 bg-green-500 rounded-full "></div>
                </Flex>
              </Box>
            ))}
          </Box>
        ) : (
          "" 
        )}
        <Flex
          className="     w-72 right-14 text-xl text-white   bg-purple-700 p-4 flex items-end justify-between gap-[2rem] rounded-t-[11px] cursor-pointer" 
          onClick={handleOpenChats} 
        >
          <Icon as={BsChatRight} className="-mr-[8rem]" /> 
          <Text>Chats</Text> 
          <Icon as={BsChevronDown} /> 
        </Flex>
       
      </Box>
    </div>
  );
};

export default ChatPage;
