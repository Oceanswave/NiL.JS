﻿//#define CALLSTACKTOSTRING

using System;
using System.Text;
using NiL.JS.Core;
using NiL.JS.Core.Modules;

namespace NiL.JS.BaseLibrary
{
#if !PORTABLE
    [Serializable]
#endif
    public class Error
    {
        [DoNotEnumerate]
        public virtual JSObject message
        {
            [Hidden]
            get;
            private set;
        }
        [DoNotEnumerate]
        public virtual JSObject name
        {
            [Hidden]
            get;
            set;
        }
#if CALLSTACKTOSTRING
        public JSObject callstack
        {
            get;
            private set;
        }
#endif
        [DoNotEnumerate]
        public Error()
        {
            name = this.GetType().Name;
            message = "";
#if CALLSTACKTOSTRING
            makeCallStack();
#endif
        }

        [DoNotEnumerate]
        public Error(Arguments args)
        {
            name = this.GetType().Name;
            message = args[0].ToString();
#if CALLSTACKTOSTRING
            makeCallStack();
#endif
        }

        [DoNotEnumerate]
        public Error(string message)
        {
            name = this.GetType().Name;
            this.message = message;
#if CALLSTACKTOSTRING
            makeCallStack();
#endif
        }
#if CALLSTACKTOSTRING
        private void makeCallStack()
        {
            StringBuilder res = new StringBuilder();
            var context = Context.CurrentContext;
            while (context != null)
            {
                res.Append("in ").AppendLine(context.caller == null ? "" : (context.caller.name ?? "<anonymous method>"));
                context = context.oldContext;
            }
            callstack = res.ToString();
        }
#endif
        [Hidden]
        public override string ToString()
        {
            string mstring;
            string nstring;
            if (message == null
                || message.valueType <= JSObjectType.Undefined
                || (mstring = message.ToString()) == "")
                return name.ToString()
#if CALLSTACKTOSTRING
 + Environment.NewLine + callstack
#endif
;
            if (name == null
                || name.valueType <= JSObjectType.Undefined
                || (nstring = name.ToString()) == "")
                return mstring
#if CALLSTACKTOSTRING
 + Environment.NewLine + callstack
#endif
;
            return nstring + ": " + mstring
#if CALLSTACKTOSTRING
 + Environment.NewLine + callstack
#endif
;
        }

        [DoNotEnumerate]
        [CLSCompliant(false)]
        public JSObject toString()
        {
            return ToString();
        }

        [Hidden]
        public JSException Wrap()
        {
            return new JSException(this);
        }
    }
}
