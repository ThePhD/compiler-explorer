// Copyright (c) 2023, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
import * as monaco from 'monaco-editor';

function definition(): monaco.languages.IMonarchLanguage {
    return {
        ignoreCase: true,
        keywords: [
            '3-D',
            'ABSENT',
            'ABS',
            'ACCEPT',
            'ACCESS',
            'ACOS',
            'ACTION',
            'ACTIVE-CLASS',
            'ACTIVE-X',
            'ADDRESS',
            'ADD',
            'ADJUSTABLE-COLUMNS',
            'ADVANCING',
            'AFTER',
            'ALIGNED',
            'ALIGNMENT',
            'ALLOCATE',
            'ALL',
            'ALPHABETIC-LOWER',
            'ALPHABETIC-UPPER',
            'ALPHABETIC',
            'ALPHABET',
            'ALPHANUMERIC-EDITED',
            'ALPHANUMERIC',
            'ALSO',
            'ALTERNATE',
            'ALTER',
            'AND',
            'ANNUITY',
            'ANYCASE',
            'ANY',
            'AREAS',
            'AREA',
            'ARE',
            'ARGUMENT-NUMBER',
            'ARGUMENT-VALUE',
            'ARITHMETIC',
            'ASCENDING',
            'ASCII',
            'ASIN',
            'ASSIGN',
            'AS',
            'ATAN',
            'ATTRIBUTE',
            'AT',
            'AUTHOR',
            'AUTO-DECIMAL',
            'AUTOMATIC',
            'AUTO-SKIP',
            'AUTO-SPIN',
            'AUTOTERMINATE',
            'AUTO',
            'AWAY-FROM-ZERO',
            'BACKGROUND-COLOR',
            'BACKGROUND-COLOUR',
            'BACKGROUND-HIGH',
            'BACKGROUND-LOW',
            'BACKGROUND-STANDARD',
            'B-AND',
            'BAR',
            'BASED',
            'BEEP',
            'BEFORE',
            'BELL',
            'BINARY-CHAR',
            'BINARY-C-LONG',
            'BINARY-DOUBLE',
            'BINARY-INT',
            'BINARY-LONG-LONG',
            'BINARY-LONG',
            'BINARY-SEQUENTIAL',
            'BINARY-SHORT',
            'BINARY',
            'BITMAP-END',
            'BITMAP-HANDLE',
            'BITMAP-NUMBER',
            'BITMAP-START',
            'BITMAP-TIMER',
            'BITMAP-TRAILING',
            'BITMAP-TRANSPARENT-COLOR',
            'BITMAP-WIDTH',
            'BITMAP',
            'BIT',
            'BLANK',
            'BLINK',
            'BLOCK',
            'B-NOT',
            'BOOLEAN',
            'BOOLEAN-OF-INTEGER',
            'B-OR',
            'BOTTOM',
            'BOXED',
            'BOX',
            'BUSY',
            'BUTTONS',
            'B-XOR',
            'BYTE-LENGTH',
            'BY',
            'C01',
            'C02',
            'C03',
            'C04',
            'C05',
            'C06',
            'C07',
            'C08',
            'C09',
            'C10',
            'C11',
            'C12',
            'CALENDAR-FONT',
            'CALL-CONVENTION',
            'CALL',
            'CANCEL-BUTTON',
            'CANCEL',
            'CAPACITY',
            'CARD-PUNCH',
            'CARD-READER',
            'CASSETTE',
            'CBL_AND',
            'CBL_CHANGE_DIR',
            'CBL_CHECK_FILE_EXIST',
            'CBL_CLOSE_FILE',
            'CBL_COPY_FILE',
            'CBL_CREATE_DIR',
            'CBL_CREATE_FILE',
            'CBL_DELETE_DIR',
            'CBL_DELETE_FILE',
            'CBL_EQ',
            'CBL_ERROR_PROC',
            'CBL_EXIT_PROC',
            'CBL_FLUSH_FILE',
            'CBL_GC_FORK',
            'CBL_GC_GETOPT',
            'CBL_GC_HOSTED',
            'CBL_GC_NANOSLEEP',
            'CBL_GC_PRINTABLE',
            'CBL_GC_WAITPID',
            'CBL_GET_CSR_POS',
            'CBL_GET_CURRENT_DIR',
            'CBL_GET_SCR_SIZE',
            'CBL_IMP',
            'CBL_NIMP',
            'CBL_NOR',
            'CBL_NOT',
            'CBL_OC_GETOPT',
            'CBL_OC_HOSTED',
            'CBL_OC_NANOSLEEP',
            'CBL_OPEN_FILE',
            'CBL_OR',
            'CBL_READ_FILE',
            'CBL_READ_KBD_CHAR',
            'CBL_RENAME_FILE',
            'CBL_SET_CSR_POS',
            'CBL_TOLOWER',
            'CBL_TOUPPER',
            'CBL_WRITE_FILE',
            'CBL_XOR',
            'C$CALLEDBY',
            'C$CHDIR',
            'CCOL',
            'C$COPY',
            'C$DELETE',
            'CD',
            'CELL-COLOR',
            'CELL-DATA',
            'CELL-FONT',
            'CELL-PROTECTION',
            'CELLS',
            'CELL',
            'CENTERED-HEADINGS',
            'CENTER',
            'CENTURY-DATE',
            'C$FILEINFO',
            'CF',
            'C$GETPID',
            'CHAINING',
            'CHAIN',
            'CHARACTERS',
            'CHARACTER',
            'CHAR-NATIONAL',
            'CHAR',
            'CHECK-BOX',
            'CH',
            'C$JUSTIFY',
            'CLASS-ID',
            'CLASSIFICATION',
            'CLASS',
            'CLEAR-SELECTION',
            'CLINES',
            'CLINE',
            'CLOSE',
            'C$MAKEDIR',
            'C$NARG',
            'COB-CRT-STATUS',
            'COBOL',
            'CODE-SET',
            'CODE',
            'COLLATING',
            'COLORS',
            'COLOR',
            'COLOURS',
            'COLS',
            'COLUMN-COLOR',
            'COLUMN-DIVIDERS',
            'COLUMN-FONT',
            'COLUMN-HEADINGS',
            'COLUMN-PROTECTION',
            'COLUMNS',
            'COLUMN',
            'COL',
            'COMBINED-DATETIME',
            'COMBO-BOX',
            'COMMAND-LINE',
            'COMMA',
            'COMMIT',
            'COMMON',
            'COMMUNICATION',
            'COMP-1',
            'COMP-2',
            'COMP-3',
            'COMP-4',
            'COMP-5',
            'COMP-6',
            'COMPUTATIONAL-1',
            'COMPUTATIONAL-2',
            'COMPUTATIONAL-3',
            'COMPUTATIONAL-4',
            'COMPUTATIONAL-5',
            'COMPUTATIONAL-6',
            'COMPUTATIONAL-X',
            'COMPUTATIONAL',
            'COMPUTE',
            'COMP-X',
            'COMP',
            'CONCATENATE',
            'CONDITION',
            'CONFIGURATION',
            'CONSOLE',
            'CONSTANT',
            'CONTAINS',
            'CONTENT',
            'CONTINUE',
            'CONTROLS',
            'CONTROL',
            'CONVERSION',
            'CONVERTING',
            'COPY-SELECTION',
            'COPY',
            'CORRESPONDING',
            'CORR',
            'COS',
            'COUNT',
            'C$PARAMSIZE',
            'C$PRINTABLE',
            'CRT-UNDER',
            'CRT',
            'CSIZE',
            'C$SLEEP',
            'CSP',
            'C$TOLOWER',
            'C$TOUPPER',
            'CURRENCY-SYMBOL',
            'CURRENCY',
            'CURRENT-DATE',
            'CURSOR-COLOR',
            'CURSOR-COL',
            'CURSOR-FRAME-WIDTH',
            'CURSOR-ROW',
            'CURSOR-X',
            'CURSOR',
            'CURSOR-Y',
            'CUSTOM-PRINT-TEMPLATE',
            'CYCLE',
            'DASHED',
            'DATA-COLUMNS',
            'DATA-POINTER',
            'DATA-TYPES',
            'DATA',
            'DATE-COMPILED',
            'DATE-ENTRY',
            'DATE-MODIFIED',
            'DATE-OF-INTEGER',
            'DATE-TO-YYYYMMDD',
            'DATE-WRITTEN',
            'DATE',
            'DAY-OF-INTEGER',
            'DAY-OF-WEEK',
            'DAY-TO-YYYYDDD',
            'DAY',
            'DEBUGGING',
            'DEBUG-ITEM',
            'DECIMAL-POINT',
            'DECLARATIVES',
            'DEFAULT-BUTTON',
            'DEFAULT-FONT',
            'DEFAULT',
            'DELETE',
            'DELIMITED',
            'DELIMITER',
            'DEPENDING',
            'DESCENDING',
            'DESTINATION',
            'DESTROY',
            'DETAIL',
            'DE',
            'DISABLE',
            'DISC',
            'DISK',
            'DISPLAY-COLUMNS',
            'DISPLAY-FORMAT',
            'DISPLAY-OF',
            'DISPLAY',
            'DIVIDER-COLOR',
            'DIVIDERS',
            'DIVIDE',
            'DIVISION',
            'DOTDASH',
            'DOTTED',
            'DOUBLE',
            'DOWN',
            'DRAG-COLOR',
            'DROP-DOWN',
            'DROP-LIST',
            'DUPLICATES',
            'DYNAMIC',
            'E',
            'EBCDIC',
            'ECHO',
            'EC',
            'EGI',
            'ELSE',
            'EMI',
            'EMPTY-CHECK',
            'ENABLE',
            'END-ACCEPT',
            'END-ADD',
            'END-CALL',
            'END-CHAIN',
            'END-COLOR',
            'END-COMPUTE',
            'END-DELETE',
            'END-DISPLAY',
            'END-DIVIDE',
            'END-EVALUATE',
            'END-IF',
            'END-MODIFY',
            'END-MULTIPLY',
            'END-OF-PAGE',
            'END-PERFORM',
            'END-READ',
            'END-RECEIVE',
            'END-RETURN',
            'END-REWRITE',
            'END-SEARCH',
            'END-START',
            'END-STRING',
            'END-SUBTRACT',
            'END-UNSTRING',
            'END-WRITE',
            'END',
            'ENGRAVED',
            'ENSURE-VISIBLE',
            'ENTRY-CONVENTION',
            'ENTRY-FIELD',
            'ENTRY-REASON',
            'ENTRY',
            'ENVIRONMENT-NAME',
            'ENVIRONMENT-VALUE',
            'ENVIRONMENT',
            'EOL',
            'EO',
            'EOP',
            'EOS',
            'EQUALS',
            'EQUAL',
            'ERASE',
            'ERROR',
            'ESCAPE-BUTTON',
            'ESCAPE',
            'ESI',
            'EVALUATE',
            'EVENT-LIST',
            'EVENT',
            'EXCEPTION-FILE-N',
            'EXCEPTION-FILE',
            'EXCEPTION-LOCATION-N',
            'EXCEPTION-LOCATION',
            'EXCEPTION-OBJECT',
            'EXCEPTION-STATEMENT',
            'EXCEPTION-STATUS',
            'EXCEPTION-VALUE',
            'EXCEPTION',
            'EXCLUSIVE',
            'EXIT',
            'EXP10',
            'EXPANDS',
            'EXPAND',
            'EXP',
            'EXTEND',
            'EXTERNAL-FORM',
            'EXTERNAL',
            'EXTERN',
            'F',
            'FACTORIAL',
            'FACTORY',
            'FALSE',
            'FD',
            'FILE-CONTROL',
            'FILE-ID',
            'FILE-NAME',
            'FILE-POS',
            'FILE',
            'FILL-COLOR2',
            'FILL-COLOR',
            'FILLER',
            'FILL-PERCENT',
            'FINAL',
            'FINISH-REASON',
            'FIRST',
            'FIXED-FONT',
            'FIXED-WIDTH',
            'FIXED',
            'FLAT-BUTTONS',
            'FLAT',
            'FLOAT-BINARY-128',
            'FLOAT-BINARY-32',
            'FLOAT-BINARY-64',
            'FLOAT-DECIMAL-16',
            'FLOAT-DECIMAL-34',
            'FLOAT-EXTENDED',
            'FLOAT-INFINITY',
            'FLOATING',
            'FLOAT-LONG',
            'FLOAT-NOT-A-NUMBER',
            'FLOAT-SHORT',
            'FLOAT',
            'FONT',
            'FOOTING',
            'FOREGROUND-COLOR',
            'FOREGROUND-COLOUR',
            'FOREVER',
            'FORMAT',
            'FORMATTED-CURRENT-DATE',
            'FORMATTED-DATETIME',
            'FORMATTED-DATE',
            'FORMATTED-TIME',
            'FORMFEED',
            'FOR',
            'FRACTION-PART',
            'FRAMED',
            'FRAME',
            'FREE',
            'FROM',
            'FULL-HEIGHT',
            'FULL',
            'FUNCTION-ID',
            'FUNCTION-POINTER',
            'FUNCTION',
            'GENERATE',
            'GET',
            'GIVING',
            'GLOBAL',
            'GOBACK',
            'GO-BACK',
            'GO-FORWARD',
            'GO-HOME',
            'GO-SEARCH',
            'GO',
            'GRAPHICAL',
            'GREATER',
            'GRID',
            'GROUP-USAGE',
            'GROUP-VALUE',
            'GROUP',
            'HANDLE',
            'HAS-CHILDREN',
            'HEADING-COLOR',
            'HEADING-DIVIDER-COLOR',
            'HEADING-FONT',
            'HEADING',
            'HEAVY',
            'HEIGHT-IN-CELLS',
            'HIDDEN-DATA',
            'HIGH-COLOR',
            'HIGHEST-ALGEBRAIC',
            'HIGHLIGHT',
            'HIGH-VALUES',
            'HIGH-VALUE',
            'HOT-TRACK',
            'HSCROLL-POS',
            'HSCROLL',
            'ICON',
            'IDENTIFICATION',
            'IDENTIFIED',
            'ID',
            'IF',
            'IGNORE',
            'IGNORING',
            'IMPLEMENTS',
            'INDEPENDENT',
            'INDEXED',
            'INDEX',
            'INDICATE',
            'INHERITS',
            'INITIALISED',
            'INITIALISE',
            'INITIALIZED',
            'INITIALIZE',
            'INITIAL',
            'INITIATE',
            'INPUT-OUTPUT',
            'INPUT',
            'INQUIRE',
            'INSERTION-INDEX',
            'INSERT-ROWS',
            'INSPECT',
            'INSTALLATION',
            'INTEGER-OF-BOOLEAN',
            'INTEGER-OF-DATE',
            'INTEGER-OF-DAY',
            'INTEGER-OF-FORMATTED-DATE',
            'INTEGER-PART',
            'INTEGER',
            'INTERFACE-ID',
            'INTERFACE',
            'INTERMEDIATE',
            'INTO',
            'INTRINSIC',
            'INVALID',
            'INVOKE',
            'IN',
            'I-O-CONTROL',
            'I-O',
            'IS',
            'ITEM-TEXT',
            'ITEM-TO-ADD',
            'ITEM-TO-DELETE',
            'ITEM-TO-EMPTY',
            'ITEM-VALUE',
            'ITEM',
            'JUSTIFIED',
            'JUST',
            'KEPT',
            'KEY',
            'KEYBOARD',
            'LABEL-OFFSET',
            'LABEL',
            'LARGE-FONT',
            'LARGE-OFFSET',
            'LAST-ROW',
            'LAST',
            'LAYOUT-DATA',
            'LAYOUT-MANAGER',
            'LC_ALL',
            'LC_COLLATE',
            'LC_CTYPE',
            'LC_MESSAGES',
            'LC_MONETARY',
            'LC_NUMERIC',
            'LC_TIME',
            'LEADING-SHIFT',
            'LEADING',
            'LEFT-JUSTIFY',
            'LEFTLINE',
            'LEFT-TEXT',
            'LEFT',
            'LENGTH-AN',
            'LENGTH-CHECK',
            'LENGTH',
            'LESS',
            'LIMITS',
            'LIMIT',
            'LINAGE-COUNTER',
            'LINAGE',
            'LINE-COUNTER',
            'LINES-AT-ROOT',
            'LINE-SEQUENTIAL',
            'LINES',
            'LINE',
            'LINKAGE',
            'LIST-BOX',
            'LM-RESIZE',
            'LOCALE-COMPARE',
            'LOCALE-DATE',
            'LOCALE-TIME-FROM-SECONDS',
            'LOCALE-TIME',
            'LOCALE',
            'LOCAL-STORAGE',
            'LOCK',
            'LOG10',
            'LOG',
            'LONG-DATE',
            'LOW-COLOR',
            'LOWER-CASE',
            'LOWERED',
            'LOWER',
            'LOWEST-ALGEBRAIC',
            'LOWLIGHT',
            'LOW-VALUES',
            'LOW-VALUE',
            'MAGNETIC-TAPE',
            'MANUAL',
            'MASS-UPDATE',
            'MAX-LINES',
            'MAX-PROGRESS',
            'MAX-TEXT',
            'MAX-VAL',
            'MAX',
            'MEAN',
            'MEDIAN',
            'MEDIUM-FONT',
            'MEMORY',
            'MENU',
            'MERGE',
            'MESSAGE',
            'METHOD-ID',
            'METHOD',
            'MIDRANGE',
            'MINUS',
            'MIN-VAL',
            'MIN',
            'MODE',
            'MODIFY',
            'MODULE-CALLER-ID',
            'MODULE-DATE',
            'MODULE-FORMATTED-DATE',
            'MODULE-ID',
            'MODULE-PATH',
            'MODULE-SOURCE',
            'MODULES',
            'MODULE-TIME',
            'MOD',
            'MONETARY-DECIMAL-POINT',
            'MONETARY-THOUSANDS-SEPARATOR',
            'MOVE',
            'MULTILINE',
            'MULTIPLE',
            'MULTIPLY',
            'NAME',
            'NATIONAL-EDITED',
            'NATIONAL-OF',
            'NATIONAL',
            'NATIVE',
            'NAVIGATE-URL',
            'NEAREST-AWAY-FROM-ZERO',
            'NEAREST-EVEN',
            'NEAREST-TOWARD-ZERO',
            'NEGATIVE',
            'NESTED',
            'NEW',
            'NEXT-ITEM',
            'NEXT',
            'NO-AUTO-DEFAULT',
            'NO-AUTOSEL',
            'NO-BOX',
            'NO-DIVIDERS',
            'NO-ECHO',
            'NO-F4',
            'NO-FOCUS',
            'NO-GROUP-TAB',
            'NO-KEY-LETTER',
            'NONE',
            'NORMAL',
            'NO-SEARCH',
            'NOTAB',
            'NOTHING',
            'NOTIFY-CHANGE',
            'NOTIFY-DBLCLICK',
            'NOTIFY-SELCHANGE',
            'NOTIFY',
            'NOT',
            'NO-UPDOWN',
            'NO',
            'NULLS',
            'NULL',
            'NUMBER-OF-CALL-PARAMETERS',
            'NUMBERS',
            'NUMBER',
            'NUM-COL-HEADINGS',
            'NUMERIC-DECIMAL-POINT',
            'NUMERIC-EDITED',
            'NUMERIC-THOUSANDS-SEPARATOR',
            'NUMERIC',
            'NUM-ROWS',
            'NUMVAL-C',
            'NUMVAL-F',
            'NUMVAL',
            'OBJECT-COMPUTER',
            'OBJECT-REFERENCE',
            'OBJECT',
            'OCCURS',
            'OFF',
            'OF',
            'OK-BUTTON',
            'OMITTED',
            'ONLY',
            'ON',
            'OPEN',
            'OPTIONAL',
            'OPTIONS',
            'ORDER',
            'ORD-MAX',
            'ORD-MIN',
            'ORD',
            'ORGANISATION',
            'ORGANIZATION',
            'OR',
            'OTHER',
            'OUTPUT',
            'OVERFLOW',
            'OVERLAP-LEFT',
            'OVERLAP-TOP',
            'OVERLINE',
            'OVERRIDE',
            'PACKED-DECIMAL',
            'PADDING',
            'PAGE-COUNTER',
            'PAGED',
            'PAGE-SETUP',
            'PAGE',
            'PARAGRAPH',
            'PARENT',
            'PASSWORD',
            'PERFORM',
            'PERMANENT',
            'PF',
            'PH',
            'PHYSICAL',
            'PICTURE',
            'PIC',
            'PIXELS',
            'PIXEL',
            'PI',
            'PLACEMENT',
            'PLUS',
            'POINTER',
            'POP-UP',
            'POSITION-SHIFT',
            'POSITION',
            'POSITIVE',
            'PREFIXED',
            'PRESENT-VALUE',
            'PRESENT',
            'PREVIOUS',
            'PRINT',
            'PRINTER-1',
            'PRINTER',
            'PRINTING',
            'PRINT-NO-PROMPT',
            'PRINT-PREVIEW',
            'PRINT',
            'PRIORITY',
            'PROCEDURE-POINTER',
            'PROCEDURES',
            'PROCEDURE',
            'PROCEED',
            'PROGRAM-ID',
            'PROGRAM-POINTER',
            'PROGRAM',
            'PROGRESS',
            'PROHIBITED',
            'PROMPT',
            'PROPERTIES',
            'PROPERTY',
            'PROTECTED',
            'PROTOTYPE',
            'PURGE',
            'PUSH-BUTTON',
            'QUERY-INDEX',
            'QUEUE',
            'QUOTES',
            'QUOTE',
            'RADIO-BUTTON',
            'RAISED',
            'RAISE',
            'RAISING',
            'RANDOM',
            'RANGE',
            'RD',
            'READ-ONLY',
            'READ',
            'RECEIVE',
            'RECORD-DATA',
            'RECORDING',
            'RECORDS',
            'RECORD-TO-ADD',
            'RECORD-TO-DELETE',
            'RECORD',
            'RECURSIVE',
            'REDEFINES',
            'REEL',
            'REFERENCE',
            'REFERENCES',
            'REFRESH',
            'REGION-COLOR',
            'RELATION',
            'RELATIVE',
            'RELEASE',
            'REMAINDER',
            'REMARKS',
            'REMOVAL',
            'REM',
            'RENAMES',
            'REPLACE',
            'REPLACING',
            'REPORTING',
            'REPORTS',
            'REPORT',
            'REPOSITORY',
            'REQUIRED',
            'RESERVE',
            'RESET-GRID',
            'RESET-LIST',
            'RESET-TABS',
            'RESET',
            'RESUME',
            'RETRY',
            'RETURN-CODE',
            'RETURNING',
            'RETURN',
            'REVERSED',
            'REVERSE-VIDEO',
            'REVERSE',
            'REWIND',
            'REWRITE',
            'RF',
            'RH',
            'RIGHT-ALIGN',
            'RIGHT-JUSTIFY',
            'RIGHT',
            'RIMMED',
            'ROLLBACK',
            'ROUNDED',
            'ROUNDING',
            'ROW-COLOR-PATTERN',
            'ROW-COLOR',
            'ROW-DIVIDERS',
            'ROW-FONT',
            'ROW-HEADINGS',
            'ROW-PROTECTION',
            'RUN',
            'S',
            'SAME',
            'SAVE-AS-NO-PROMPT',
            'SAVE-AS',
            'SCREEN',
            'SCROLL-BAR',
            'SCROLL',
            'SD',
            'SEARCH-OPTIONS',
            'SEARCH-TEXT',
            'SEARCH',
            'SECONDS-FROM-FORMATTED-TIME',
            'SECONDS-PAST-MIDNIGHT',
            'SECONDS',
            'SECTION',
            'SECURE',
            'SECURITY',
            'SEGMENT-LIMIT',
            'SEGMENT',
            'SELECT-ALL',
            'SELECTION-INDEX',
            'SELECTION-TEXT',
            'SELECT',
            'SELF-ACT',
            'SELF',
            'SEND',
            'SENTENCE',
            'SEPARATE',
            'SEPARATION',
            'SEQUENCE',
            'SEQUENTIAL',
            'SET',
            'SHADING',
            'SHADOW',
            'SHARING',
            'SHORT-DATE',
            'SHOW-LINES',
            'SHOW-NONE',
            'SHOW-SEL-ALWAYS',
            'SIGNED-INT',
            'SIGNED-LONG',
            'SIGNED-SHORT',
            'SIGNED',
            'SIGN',
            'SIN',
            'SIZE',
            'SMALL-FONT',
            'SORT-MERGE',
            'SORT-ORDER',
            'SORT-RETURN',
            'SORT',
            'SOURCE-COMPUTER',
            'SOURCES',
            'SOURCE',
            'SPACE-FILL',
            'SPACES',
            'SPACE',
            'SPECIAL-NAMES',
            'SPINNER',
            'SQRT',
            'SQUARE',
            'STANDARD-1',
            'STANDARD-2',
            'STANDARD-BINARY',
            'STANDARD-COMPARE',
            'STANDARD-DECIMAL',
            'STANDARD-DEVIATION',
            'STANDARD',
            'START-X',
            'START',
            'START-Y',
            'STATEMENT',
            'STATIC-LIST',
            'STATIC',
            'STATUS-BAR',
            'STATUS-TEXT',
            'STATUS',
            'STDCALL',
            'STDERR',
            'STDIN',
            'STDOUT',
            'STEP',
            'STOP',
            'STORED-CHAR-LENGTH',
            'STRING',
            'STRONG',
            'STYLE',
            'SUB-QUEUE-1',
            'SUB-QUEUE-2',
            'SUB-QUEUE-3',
            'SUBSTITUTE-CASE',
            'SUBSTITUTE',
            'SUBTRACT',
            'SUBWINDOW',
            'SUM',
            'SUM',
            'SUPER',
            'SUPPRESS',
            'SWITCH-0',
            'SWITCH-10',
            'SWITCH-11',
            'SWITCH-12',
            'SWITCH-13',
            'SWITCH-14',
            'SWITCH-15',
            'SWITCH-16',
            'SWITCH-17',
            'SWITCH-18',
            'SWITCH-19',
            'SWITCH-1',
            'SWITCH-20',
            'SWITCH-21',
            'SWITCH-22',
            'SWITCH-23',
            'SWITCH-24',
            'SWITCH-25',
            'SWITCH-26',
            'SWITCH-27',
            'SWITCH-28',
            'SWITCH-29',
            'SWITCH-2',
            'SWITCH-30',
            'SWITCH-31',
            'SWITCH-32',
            'SWITCH-33',
            'SWITCH-34',
            'SWITCH-35',
            'SWITCH-36',
            'SWITCH-3',
            'SWITCH-4',
            'SWITCH-5',
            'SWITCH-6',
            'SWITCH-7',
            'SWITCH-8',
            'SWITCH-9',
            'SYMBOLIC',
            'SYMBOL',
            'SYNCHRONISED',
            'SYNCHRONIZED',
            'SYNC',
            'SYSERR',
            'SYSIN',
            'SYSIPT',
            'SYSLIST',
            'SYSLST',
            'SYSOUT',
            'SYSTEM',
            'SYSTEM-DEFAULT',
            'SYSTEM-OFFSET',
            'TABLE',
            'TAB-TO-ADD',
            'TAB-TO-DELETE',
            'TAB',
            'TALLYING',
            'TALLY',
            'TAN',
            'TAPE',
            'TEMPORARY',
            'TERMINATE',
            'TERMINATION-VALUE',
            'TEST-DATE-YYYYMMDD',
            'TEST-DAY-YYYYDDD',
            'TEST-FORMATTED-DATETIME',
            'TEST-NUMVAL-C',
            'TEST-NUMVAL-F',
            'TEST-NUMVAL',
            'TEXT',
            'THAN',
            'THEN',
            'THREADS',
            'THREAD',
            'THROUGH',
            'THRU',
            'THUMB-POSITION',
            'TILED-HEADINGS',
            'TIMEOUT',
            'TIME-OUT',
            'TIMES',
            'TIME',
            'TITLE-POSITION',
            'TITLE',
            'TOP',
            'TOWARD-GREATER',
            'TOWARD-LESSER',
            'TO',
            'TRADITIONAL-FONT',
            'TRAILING-SHIFT',
            'TRAILING-SIGN',
            'TRAILING',
            'TRANSFORM',
            'TRANSPARENT',
            'TREE-VIEW',
            'TRIM',
            'TRUE',
            'TRUNCATION',
            'TYPEDEF',
            'TYPE',
            'U',
            'UCS-4',
            'UNBOUNDED',
            'UNDERLINE',
            'UNFRAMED',
            'UNIT',
            'UNIVERSAL',
            'UNLOCK',
            'UNSIGNED-INT',
            'UNSIGNED-LONG',
            'UNSIGNED-SHORT',
            'UNSIGNED',
            'UNSORTED',
            'UNSTRING',
            'UNTIL',
            'UPDATE',
            'UPON',
            'UPPER-CASE',
            'UPPER',
            'UP',
            'USAGE',
            'USE-ALT',
            'USER-DEFAULT',
            'USE-RETURN',
            'USER',
            'USE-TAB',
            'USE',
            'USING',
            'UTF-16',
            'UTF-8',
            'V',
            'VALIDATE-STATUS',
            'VALIDATE',
            'VALID',
            'VAL-STATUS',
            'VALUE-FORMAT',
            'VALUES',
            'VALUE',
            'VARIABLE',
            'VARIANCE',
            'VARIANT',
            'VARYING',
            'VERTICAL',
            'VERY-HEAVY',
            'VIRTUAL-WIDTH',
            'VPADDING',
            'VSCROLL-BAR',
            'VSCROLL-POS',
            'VSCROLL',
            'VTOP',
            'WAIT',
            'WEB-BROWSER',
            'WHEN-COMPILED',
            'WHEN',
            'WIDTH-IN-CELLS',
            'WIDTH',
            'WINDOW',
            'WITH',
            'WORDS',
            'WORKING-STORAGE',
            'WRAP',
            'WRITE',
            'X',
            'X"91"',
            'X"E4"',
            'X"E5"',
            'X"F4"',
            'X"F5"',
            'Y',
            'YEAR-TO-YYYY',
            'YYYYDDD',
            'YYYYMMDD',
            'ZEROES',
            'ZERO-FILL',
            'ZEROS',
            'ZERO',
        ],
        typeKeywords: ['integer number', 'real number', 'identifier', 'string'],
        numbers: /-?[0-9.]/,
        tokenizer: {
            root: [
                // identifiers and keywords
                [
                    /[A-Za-z][\w0-9$-]*/,
                    {
                        cases: {
                            '@typeKeywords': 'keyword',
                            '@keywords': 'keyword.$0',
                            '@default': 'identifier',
                        },
                    },
                ],
                {include: '@whitespace'},
                [/@numbers/, 'number'],
                [/[.+\-*/=<>]/, 'operators'],
                [/(")(.*)(")/, ['string', 'string', 'string']],
                [/(')(.*)(')/, ['string', 'string', 'string']],
            ],

            comment: [
                [/(.{6}\*.*)([\n])/, ['comment', '@pop']],
            ],

            whitespace: [
                [/.{6}\*.*$/, 'comment'],
                [/[ \t\r\n]+/, 'white'],
            ],
        },
    };
}

monaco.languages.register({id: 'cobol'});
monaco.languages.setMonarchTokensProvider('cobol', definition());

export {};
