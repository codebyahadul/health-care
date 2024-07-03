// eslint-disable-next-line react/prop-types
const Container = ({children}) => {
    return (
        <div className='my-8 md:my-16 lg:my-28'>
            {children}
        </div>
    );
};

export default Container;