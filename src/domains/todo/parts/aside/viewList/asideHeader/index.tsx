import { memo } from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import css from './styles.module.scss'

export type AsideHeaderPropsType = {
  caption: string;
  isOpenTaskList: boolean;
  onOpenTaskList: VoidFunction;
  renderHeaderSlot?: () => JSX.Element;
} 

export const AsideHeader = memo<AsideHeaderPropsType>(({ 
  caption, 
  isOpenTaskList, 
  onOpenTaskList,
  renderHeaderSlot
}) => (
  <>
    <div className={css.innerConatiner} onClick={onOpenTaskList}>
      <div className={css.asideBar_itemIcon}>
        {isOpenTaskList ? <AiOutlineDown/> : <AiOutlineRight/>}
      </div>
      <span className={css.assideBas_headLabel}>{caption}</span>
    </div>
    {!!renderHeaderSlot && renderHeaderSlot()}
  </>
))