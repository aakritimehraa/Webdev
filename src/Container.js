import React from 'react'
import Products from './Products'

function Container() {
    return (
        <div>
            <h2 className='heading' id='heading'>Tables</h2>
        <div className='containerr'>

        <Products image='https://i.pinimg.com/originals/0f/8b/77/0f8b775ad624eff85a363e03b6725bd8.jpg' name='Table' price='$300'/>
        <Products image='https://img.favpng.com/14/12/17/table-chair-stool-plywood-png-favpng-1bDVx8fh5Bkrjpg2ce42rFbZ1_t.jpg' name='Table' price='$300'/>
        <Products image='https://3.imimg.com/data3/OG/ID/MY-3667368/round-banquet-table-500x500.jpg' name='Table' price='$300'/>


        </div>
        <h2 className='heading'>Chairs</h2>

        <div className='containerr'>

<Products image='https://target.scene7.com/is/image/Target/GUEST_26e2fb3b-8ed6-49d9-a085-aff27e65bd0e?wid=488&hei=488&fmt=pjpeg' name='Chair' price='$300'/>
<Products image='https://5.imimg.com/data5/YB/YL/MY-41063424/trendy-single-sofa-500x500.jpg' name='Chair' price='$300'/>
<Products image='https://www.bicfurniture.com/wp-content/uploads/2016/07/oakwood_single_seater_sofa.jpg' name='Chair' price='$300'/>


</div>
        </div>
    )
}

export default Container
