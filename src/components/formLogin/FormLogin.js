import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { default as React, useState } from 'react';
import { connect } from 'react-redux';
import { loginSuccess, saveInfoUsers } from '../../actions/loginAction';
import './formLogin.css';
import { toast } from 'react-toastify';

const FormLogin = ({ loginStatus, loginSuccess, saveInfoUsers, history }) => {
    const [info, setInfo] = useState({
        tel: '',
        pass: ''
    })

    const handleLogin = (e) => {
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem('infoUsers')) || []

        const checkUsers = users.findIndex(item => item.tel === info.tel && item.pass === info.pass)

        if (checkUsers !== -1 && info.tel && info.pass) {
            loginSuccess()
            history.push('/')
        } else {
            toast.error('Số Điện Thoại Hoặc Mật Khấu Không Đúng')

        }

    }

    const handleGetValue = (e) => {
        const { name, value } = e.target
        setInfo({
            ...info,
            [name]: value
        })
    }

    const handleSaveInfo = () => {
        const users = JSON.parse(localStorage.getItem('infoUsers')) || []
        const infoUsers = { ...info }
        const usersSave = users.concat([infoUsers])

        var decimal = /^[A-Z]*$/
        // var test = decimal.test(info.pass)

        var match = info.pass.match(decimal)

        const checkUsers = users.findIndex(item => item.tel === info.tel)
        if (checkUsers !== -1) {
            toast.error('Tài Khoản Đã Tồn Tại')
        }
        else if (info.tel.length < 5) {
            toast.error('Số điện thoại phải lớn hơn 10 số')
        }
        else if (!match) {
            toast.error('Mật Khẩu Phải Viết Hoa')
        }
        else {
            localStorage.setItem('infoUsers', JSON.stringify(usersSave))
        }
    }

    return (
        <div>
            <form className='form-login' >
                <Typography className='m-auto' variant='h5' >Đăng Nhập</Typography>
                <Paper style={{ padding: 16 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                onChange={handleGetValue}
                                autoFocus
                                name="tel"
                                fullWidth
                                required
                                type="text"
                                label="Số Điện Thoại"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={handleGetValue}
                                name="pass"
                                fullWidth
                                required
                                type="password"
                                label="Mật Khẩu"
                            />
                        </Grid>
                        <Grid className='wrap-button' item xs={12} >
                            <Button type='submit' onClick={handleLogin} variant='contained' color='primary'>Đăng Nhập</Button>
                            <Button onClick={handleSaveInfo} variant='contained' color='default'>Đăng Ký</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loginStatus: state.login
    }
}

export default connect(mapStateToProps, { loginSuccess, saveInfoUsers })(FormLogin);