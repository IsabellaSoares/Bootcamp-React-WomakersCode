export const cardStyle = {
	width: '95%',
	margin: 'auto',
	borderRadius: '12px',
	minHeight: '100%'
};

export function selectHeadStyle(index) {
    let style = {
        borderRadius: '12px 12px 0 0',
        fontWeight: 'bold'
    }

	if (index % 2 === 0) {
        style.backgroundImage = 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)';
	} else if (index % 3 === 0) {
        style.backgroundImage = 'linear-gradient(120deg, #ff9a9e 0%, #fecfef 100%)';
	} else {
        style.backgroundImage = 'linear-gradient(120deg, #f3a0ff 0%, #ffbae5 100%)';
    }
    
    return style;
}