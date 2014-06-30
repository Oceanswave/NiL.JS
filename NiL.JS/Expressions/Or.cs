﻿using System;
using NiL.JS.Core;

namespace NiL.JS.Expressions
{
    [Serializable]
    public sealed class Or : Expression
    {
        public Or(CodeNode first, CodeNode second)
            : base(first, second, true)
        {

        }

        internal override JSObject Invoke(Context context)
        {
            lock (this)
            {
                var left = Tools.JSObjectToInt32(first.Invoke(context));
                tempContainer.iValue = left | Tools.JSObjectToInt32(second.Invoke(context));
                tempContainer.valueType = JSObjectType.Int;
                return tempContainer;
            }
        }

        public override string ToString()
        {
            return "(" + first + " | " + second + ")";
        }
    }
}