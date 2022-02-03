import { FC } from "react";
import { 
  AiOutlineBars,
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";
import { AppBar, IconAppBarButton } from "../../../../components/appBar";
import css from './styles.module.scss';

export type NavigationPropsType = {
  setIsOpenAside: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenAside: boolean;
  setSelectedTaskListId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Navigation: FC<NavigationPropsType> = ({ 
  setIsOpenAside, 
  isOpenAside,
  setSelectedTaskListId,
}) => {
  return(
    <AppBar>
      <div className={css.nav_group}>
        <IconAppBarButton
          onClick={() => setIsOpenAside(!isOpenAside)}
        >
          <AiOutlineBars/>
        </IconAppBarButton>
        <IconAppBarButton
          onClick={() => setSelectedTaskListId(null)}
        >
          <AiOutlineHome/>
        </IconAppBarButton>
      </div>
      <div className={css.nav_group}>
        <IconAppBarButton
          onClick={() => {}}
        >
          <AiOutlineSetting/>
        </IconAppBarButton>
      </div>
    </AppBar>
  )
}