export const Link = ({ aside = false, ...props }) => (
	<a
		rel="noopener noreferrer"
		target={aside ? "_blank" : undefined}
		{...props}
	/>
);
