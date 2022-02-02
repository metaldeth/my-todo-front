import { FC } from "react";
import { 
  AiOutlineBars,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineComment,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineHome,
  AiOutlinePlus,
  AiOutlinePushpin,
  AiOutlineSetting,
  AiOutlineStar,
  AiOutlineUsergroupAdd,
  AiOutlineEllipsis,
  AiOutlineUp,
  AiOutlineDown
} from "react-icons/ai";
import {
  BsCircleFill,
  BsChatText,
  BsGrid3X2Gap,
} from 'react-icons/bs'

export const TestDriveIcons: FC<{}> = () => {
  return(
    <>
      <h2><AiOutlineBars/> Меню</h2>
      <h2><AiOutlineCheck/> Сохранить</h2>
      <h2><AiOutlineClose/> Отменить</h2>
      <h2><BsChatText/> Коментарии</h2>
      <h2><AiOutlineDelete/> Удалить</h2>
      <h2><AiOutlineEdit/> Редактировать</h2>
      <h2><AiOutlineHome/> Домой</h2>
      <h2><AiOutlinePlus/> Добавить</h2>
      <h2><AiOutlineSetting/> Настройки</h2>
      <h2><AiOutlinePushpin/> Закрепить</h2>
      <h2><AiOutlineStar/> Избранное</h2>
      <h2><AiOutlineUsergroupAdd/> Добавить участников</h2>
      <h2><AiOutlineEllipsis/> Доп Настройки</h2>
      <h2><BsGrid3X2Gap/> Доп настройки v2</h2>
      <h2><BsCircleFill/> Точка</h2>
      <h2><AiOutlineUp/> Up</h2>
      <h2><AiOutlineDown/> Down</h2>
    </>
  )
}