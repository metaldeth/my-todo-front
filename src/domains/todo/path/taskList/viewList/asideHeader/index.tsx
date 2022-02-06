import { memo } from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import css from './styles.module.scss'

export type AsideHeaderPropsType = {
  caption: string;
  isOpenTaskList: boolean;
  onOpenTaskList: VoidFunction;
}

export const AsideHeader = memo<AsideHeaderPropsType>(({ caption, onOpenTaskList, isOpenTaskList }) => (
  <div onClick={onOpenTaskList}>
    <div className={css.asideBar_itemIcon}>
      {isOpenTaskList ? <AiOutlineDown/> : <AiOutlineRight/>}
    </div>
    <span className={css.assideBas_headLabel}>{caption}</span>
  </div>
))