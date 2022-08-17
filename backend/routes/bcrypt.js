const bcrypt=require('bcryptjs')

async function hashPwd(value)
{
    const salt = await bcrypt.genSalt(10)
    const res = await bcrypt.hash(value,salt)
    return res
}

async function hashCompare(hashedPwd, pwd)
{
    const res = await bcrypt.compare(pwd,hashedPwd)
    return res
}
module.exports={hashPwd, hashCompare}