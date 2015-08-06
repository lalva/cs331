#Raw output:
```
i: 1
0
i: 2
0
i: 3
0
i: 4
0
i: 5
1
i: 6
1
i: 7
10
i: 8
95
i: 9
948
i: 10
12687
i: 11
128300
i: 12
6670148
i: 13
FATAL ERROR: JS Allocation failed - process out of memory
Abort trap: 6
```

#Table of values:
| iteration  | 1     | 2     | 3     | 4       | 5       | 6       | 7         | 8         | 9         | 10          | 11          | 12          | 13         |
| nxn        | 2x2   | 4x4   | 8x8   | 16x16   | 32x32   | 64x64   | 128x128   | 256x256   | 512x512   | 1024x1024   | 2048x2048   | 4096x4096   | 8192x8192  |
| time       | <1ms  | <1ms  | <1ms  | <1ms    | 1ms     | 1ms     | 10ms      | 95ms      | 948ms     | 12687ms     | 128300ms    | 6670148ms   | FAILED     |