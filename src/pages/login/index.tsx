import { useCallback } from 'react'
import { Box, Link as AnchorLink, FormControl, Button, Avatar, Typography, FormHelperText, OutlinedInput, InputLabel, colors, Container } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { useForm } from 'react-hook-form'

import type { NextPage } from 'next'
import { registerMui } from '@/utils/registerMui'

type AuthInfo = {
  id: string;
  password: string;
}

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<AuthInfo>()
  const signIn = useCallback((authInfo: AuthInfo) => {
    console.log(authInfo)
  }, [])

  return (
    <Box component="main" sx={{ height: '100vh', backgroundSize: { xs: '10rem', md: '20rem' }, backgroundPosition: 'bottom right', backgroundRepeat: 'no-repeat', backgroundImage: 'url("/images/login.svg")', pt: 16 }}>
      <Container maxWidth="xs">
        <Avatar sx={{ bgcolor: colors.orange[400], mx: 'auto', mb: 1 }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5" align="center" sx={{ mb: 3 }}>
          ユーザー認証
        </Typography>
        <Box component="form" onSubmit={handleSubmit(authInfo => signIn(authInfo))} noValidate>
          <FormControl error={!!errors.id} variant="outlined" sx={{ width: '100%', mb: 4 }}>
            <InputLabel>ID</InputLabel>
            <OutlinedInput
              type="text"
              fullWidth
              id="id"
              label="ID"
              autoComplete="id"
              {...registerMui(register('id', {
                required: '* IDを入力してください',
              }))}
            />
            <FormHelperText>{errors.id?.message}</FormHelperText>
          </FormControl>
          <FormControl error={!!errors.password} variant="outlined" sx={{ width: '100%', mb: 4 }}>
            <InputLabel>PASSWORD</InputLabel>
            <OutlinedInput
              type="text"
              fullWidth
              id="password"
              label="PASSWORD"
              autoComplete="current-password"
              {...registerMui(register('password', {
                required: '* パスワードを入力してください',
              }))}
            />
            <FormHelperText>{errors.password?.message}</FormHelperText>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mb: 3 }}
          >
            Sign In
          </Button>
        </Box>
      </Container>
      <Typography variant="body2" color="text.secondary" align="center">
        Copyright ©&nbsp;
        <AnchorLink color="inherit" href="https://www.carsensor.net/shop/chiba/322141001">
          U＆COMPANY
        </AnchorLink>
        &nbsp;2021.
      </Typography>
    </Box>
  )
}

export default SignIn
