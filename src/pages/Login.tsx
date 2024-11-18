import { useForm } from "@mantine/form"
import { Navbar } from "../components"
import { useAppSelector, useAppDispatch } from "../hooks"
import { setToken } from "../lib/store/userSlice"
import {Button, Card, Center, PasswordInput, Stack, TextInput } from "@mantine/core"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { account, ID } from '../lib';

export function Login() {
    const navigate = useNavigate();
    const token = useAppSelector((state) => state.user.token);
    const dispatch = useAppDispatch();

    async function login(email: string, password: string) {
        await account.createEmailPasswordSession(email, password);
        return await account.get();
    }
    

    useEffect(() => {
        if (token) {
            navigate(-1)
        }
    }, [])

    const form = useForm({
        mode: 'controlled',
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        }
    })
    return(
        <Stack>
            <Navbar/>
            <Center>
                <Card>
                    <form onSubmit={form.onSubmit(async (values) =>{ 
                        console.log("Login sent")
                        const user = await login(values.email, values.password);
                        dispatch(auth(true));
                        navigate(-1);
                        })}>
                        <Stack>
                            <TextInput 
                                {...form.getInputProps('email')}
                                withAsterisk 
                                required
                                placeholder="Your email" 
                                id="email"
                            />
                            <PasswordInput {...form.getInputProps('password')} placeholder="Your password" id="password" />
                            <Button type="submit" mt="sm">
                                Log in
                            </Button>
                        </Stack>
                    </form>
                </Card>
            </Center>
        </Stack>
    )
}