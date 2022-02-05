import { FC, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import css from './styles.module.scss';

const modalRootElement = document.querySelector("#modal");

export type ModalPropsType = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export const Modal: FC<ModalPropsType> = ({ isOpen, onClose, children }) => {
	
	const element = useMemo(() => document.createElement("div"), []);

	useEffect(() => {
		if (isOpen && modalRootElement) {
			modalRootElement.appendChild(element);

			return () => {
				modalRootElement.removeChild(element);
			};
		}
	});

	if (isOpen) {
		return createPortal(
			<div className={css.modal_background} onClick={() => onClose(false)}>
				{children}
			</div>,
			element
		);
	}

	return null;
};