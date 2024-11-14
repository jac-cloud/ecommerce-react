import { useForm } from "@mantine/form"
import { Navbar } from "../components"
import {Button, Card, Center, PasswordInput, Stack, TextInput } from "@mantine/core"

export function Login() {
    const form = useForm({
        mode: 'controlled',
        initialValues: {
            username: '',
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
                    <form onSubmit={form.onSubmit((values) => console.log("Login sent"))}>
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