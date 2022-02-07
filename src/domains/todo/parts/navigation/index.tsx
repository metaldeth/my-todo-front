import { memo, useState } from "react";
import { 
  AiOutlineBars,
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";
import { useNavigate } from "react-router";
import { AppBar, IconAppBarButton } from "../../../../components/appBar";
import { Modal } from "../../../../components/modal";
import { Setting } from "./setting";
import css from './styles.module.scss';

export type NavigationPropsType = {
  onOpenAside: VoidFunction;
}

export const Navigation = memo<NavigationPropsType>(({ 
  onOpenAside, 
}) => {
  const navigate = useNavigate();
    
  const [ isOpenSetting, setIsOpenSetting ] = useState(false);

  return(
    <AppBar>
      <div className={css.nav_group}>
        <IconAppBarButton
          onClick={onOpenAside}
        >
          <AiOutlineBars/>
        </IconAppBarButton>
        {/* <IconAppBarButton
          onClick={() => navigate('/')}
        >
          <AiOutlineHome/>
        </IconAppBarButton> */}
      </div>
      <div className={css.nav_group}>
        <IconAppBarButton
          onClick={() => setIsOpenSetting(true)}
        >
          <AiOutlineSetting/>
        </IconAppBarButton>
      </div>

      <Modal
        isOpen={isOpenSetting}
      >
        <Setting
          onClose={() => setIsOpenSetting(false)}
        />
      </Modal>
    </AppBar>
  )
})