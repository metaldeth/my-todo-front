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
}

export const Navigation: FC<NavigationPropsType> = ({ setIsOpenAside, isOpenAside }) => {
  return(
    <AppBar>
      <div className={css.nav_group}>
        <IconAppBarButton
          onClick={() => setIsOpenAside(!isOpenAside)}
        >
          <AiOutlineBars/>
        </IconAppBarButton>
        <IconAppBarButton
          onClick={() => {}}
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