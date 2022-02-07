import classNames from "classnames";
import { memo } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../../app/hooks";
import { logOut } from "../../../../auth/state/action";
import css from './styles.module.scss';

export type SettingPropsType = {
  onClose: VoidFunction;
}

export const Setting = memo<SettingPropsType>(({
  onClose
}) => {
  const dispatch = useAppDispatch();

  const onLogOut = () => {
    dispatch(logOut())
  }

  return(
    <div className={css.setting_modal} onClick={onClose}>
      <div className={classNames(css.setting_box, css.setting_boxPosition)}>
        <div 
          className={css.setting_item} 
          onClick={onLogOut}
        >
          <AiOutlineDelete/> <span className={css.setting_caption}>Выход</span>
        </div>
      </div>
    </div>
  )
})