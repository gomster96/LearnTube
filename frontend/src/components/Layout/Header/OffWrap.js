
const OffWrap = () => {

	const canvasMenuRemove = () => {
        document.body.classList.remove('nav-expanded');
    };

	return (
        <div onClick={canvasMenuRemove} className='offwrap'>

        </div>
    );
}

export default OffWrap;