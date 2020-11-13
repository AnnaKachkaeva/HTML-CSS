import dis

def foo(x):
    r = 1
    n = 0
    while (n>1):
        r = r * n
        n -= 1
        
    return r

#code = dis.Bytecode(foo)
#print(code.info())
print(dis.dis(foo))
#for x in code: print(x)
