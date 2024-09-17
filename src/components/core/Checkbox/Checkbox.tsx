export default function Checkbox() {
    return (
        <>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">No soy un Robot</span>
                    <input type="checkbox" defaultChecked className="checkbox" />
                </label>
            </div>
        </>
    )
}
