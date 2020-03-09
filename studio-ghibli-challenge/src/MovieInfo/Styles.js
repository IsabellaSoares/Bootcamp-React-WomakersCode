export const cardStyle = {
    borderRadius: '12px'
};

export const descriptionStyle =  {
    fontSize: '16px',
    textAlign: 'center',
    width: '100%'
};

export const gridStyle = {
    width: '25%',
    textAlign: 'center',
    padding: '12px 24px'
};

export function selectHeadStyle() {
    const random = Math.random();

    if (random % 2 === 0) {
        return {
            backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
            borderRadius: '12px 12px 0 0',
            fontWeight: 'bold',
            fontSize: '20px'
        };
    } else if (random % 3 === 0) {
        return {
            backgroundImage: 'linear-gradient(120deg, #ff9a9e 0%, #fecfef 100%)',
            borderRadius: '12px 12px 0 0',
            fontWeight: 'bold',
            fontSize: '20px'
        };
    } else {
        return {
            backgroundImage: 'linear-gradient(120deg, #f3a0ff 0%, #ffbae5 100%)',
            borderRadius: '12px 12px 0 0',
            fontWeight: 'bold',
            fontSize: '20px'
        };
    }
}