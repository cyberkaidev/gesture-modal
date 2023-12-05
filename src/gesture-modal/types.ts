export interface GestureModalProps {
	visible: boolean;
	title: string;
	onConfirm: () => void;
	onCancel: () => void;
}

export interface TouchProps {
	backgroundColor: string;
}
