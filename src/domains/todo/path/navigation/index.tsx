import { memo } from "react";
import { 
  AiOutlineBars,
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";
import { useNavigate } from "react-router";
import { AppBar, IconAppBarButton } from "../../../../components/appBar";
import css from './styles.module.scss';

export type NavigationPropsType = {
  onOpenAside: VoidFunction;
}

export const Navigation = memo<NavigationPropsType>(({ 
  onOpenAside, 
}) => {
  const navigate = useNavigate();
  return(
    <AppBar>
      <div className={css.nav_group}>
        <IconAppBarButton
          onClick={onOpenAside}
        >
          <AiOutlineBars/>
        </IconAppBarButton>
        <IconAppBarButton
          onClick={() => navigate('/')}
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
})