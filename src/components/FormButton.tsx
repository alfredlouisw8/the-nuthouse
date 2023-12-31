import { useState, ReactNode } from "react";

interface Props {
	children?: ReactNode;
	onClick: () => Promise<void>;
	className?: string;
	type?: "button" | "reset" | "submit" | undefined;
}

export default function FormButton({
	children,
	onClick,
	className,
	type,
}: Props) {
	const [enabled, setEnabled] = useState(true);

	const handleClick = async () => {
		if (!enabled) {
			return;
		}
		setEnabled(false);
		await onClick();
		setEnabled(true);
	};

	return (
		<button
			disabled={!enabled}
			className={className}
			onClick={handleClick}
			type={type}
		>
			{children}
		</button>
	);
}
