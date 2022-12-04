import {
  Title,
  Text,
  Anchor,
  Container,
  Flex,
  Paper,
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Button,
} from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Container size="lg">
        <Flex
          justify="space-around"
          align="center"
          direction={{ base: 'column', xs: 'row' }}
          my={50}
        >
          <Title className={classes.title} align="left">
            AfreecaTV
            <br className={classes.br} />
            <Text inherit variant="gradient" component="span" className={classes.center}>
              Discord
            </Text>
            <br className={classes.br} />
            Alert
          </Title>
          <Paper withBorder shadow="md" p={30} my={30} radius="md" style={{ minWidth: 300 }}>
            <TextInput label="아이디" placeholder="아이디를 입력해주세요" required />
            <PasswordInput
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              required
              mt="md"
            />
            <Group position="apart" mt="lg">
              <Checkbox label="로그인 유지" sx={{ lineHeight: 1 }} />
              <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
                아이디/비밀번호 찾기
              </Anchor>
            </Group>
            <Group position="apart" noWrap>
              <Button fullWidth mt="xl">
                로그인
              </Button>
              <Button fullWidth mt="xl" variant="outline">
                회원가입
              </Button>
            </Group>
          </Paper>
        </Flex>
      </Container>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        이제 디스코드로도 아프리카TV 방송 알림을 받을 수 있습니다. 간편하게 회원가입하고 무료로
        제공되는 알림 서비스를 경험해보세요.{' '}
      </Text>
    </>
  );
}
