import loadingImg from './img/loading.gif';

interface IProps
{
    show: boolean;
}

const Loading: React.FC<IProps> = props =>
    <div style={{
        display: props.show ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
    }}>
        <img
            style={{
                width: "40px",
                height: "40px"
            }}
            src={loadingImg}
        />
    </div>

export default Loading;