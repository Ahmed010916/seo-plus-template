
function ToggleLang() {
  return (
    <div>
        <p onClick={()=>{
              if(document.body.dir === "rtl") {
                document.body.dir = "ltr"
              }else {
                document.body.dir = "rtl"
              }
            }}>En|Ar</p>
    </div>
  )
}

export default ToggleLang